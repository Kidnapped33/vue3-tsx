import { defineComponent, onMounted, PropType, reactive, ref } from "vue";
import { Button } from "../../shared/Button";
import { Form, FormItem } from "../../shared/Form";
import { Rules, validate } from "../../shared/validate";
import s from "./Tag.module.scss";
import { createTag, editTag, getTag } from "../../api/watermelon/api";
import { useRoute, useRouter } from "vue-router";

export const TagForm = defineComponent({
  props:{
    id: Number
  },
  setup: (props) => {

    onMounted(async () => {
      if(!props.id) {return}
      const response = await getTag(props.id)
      Object.assign(formData, response.data.resource)
    });

    const router = useRouter();
    const route = useRoute();

    const formData = reactive({
      id: undefined,
      name: "",
      sign: "",
      kind: route.query.kind!.toString(),
    });

    const errors = reactive<{ [k in keyof typeof formData]?: string[] }>({});
    const onSubmit = async (e: Event) => {
      e.preventDefault();

      const rules: Rules<typeof formData> = [
        { key: "name", type: "required", message: "必填" },
        {
          key: "name",
          type: "pattern",
          regex: /^.{1,4}$/,
          message: "只能填 1 到 4 个字符",
        },
        { key: "sign", type: "required", message: "必填" },
      ];
      Object.assign(errors, {
        name: undefined,
        sign: undefined,
      });

      const result = validate(formData, rules);

      Object.assign(errors, result);

      /** 修改 */
      if(formData.id){
        const res = await editTag(formData.id, {name: formData.name, sign: formData.sign})
        if (res){router.back()}
      }else{
        /** 新增 */
        if (!(Object.keys(result).length === 0)) return;
        if(formData.kind === "支出"){
          formData.kind = "expenses"
        }else if(formData.kind === "收入"){
          formData.kind = "income"
        }
        const res = await createTag(formData)
        if (res){ router.back()}
      };
    };



    return () => (
      <Form onSubmit={onSubmit} >
        <FormItem label='标签名'
          type="text"
          v-model={formData.name}
          error={errors['name'] ? errors['name'][0] : '　'} />
        <FormItem label={'符号 ' + formData.sign}
          type="emojiSelect" v-model={formData.sign}
          error={errors['sign'] ? errors['sign'][0] : '　'} />
        <FormItem>
          <p class={s.tips}>记账时长按标签即可进行编辑</p>
        </FormItem>
        <FormItem>
          <Button type='submit' class={[s.button]}>确定</Button>
        </FormItem>
      </Form>
    );
  },
});
