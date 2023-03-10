import { defineComponent, reactive } from "vue";
import service from "../../api";
import { Button } from "../../shared/Button";
import { EmojiSelect } from "../../shared/EmojiSelect";
import { Form, FormItem } from "../../shared/Form";
import { Rules, validate } from "../../shared/validate";
import s from "./Tag.module.scss";
import { createTag } from "../../api/watermelon/api";

export const TagForm = defineComponent({
  setup: () => {
    const formData = reactive({
      name: "",
      sign: "",
      kind: "",
    });
    const errors = reactive<{ [k in keyof typeof formData]?: string[] }>({});
    const onSubmit = async (e: Event) => {
      // console.log('formData',formData)/
      // console.log('toRaw的formData',toRaw(formData))

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
      e.preventDefault();

      if (!(Object.keys(result).length === 0)) return;

      const res = await createTag(formData)
      console.log('res---------',res)
    };
    return () => (
      <Form onSubmit={onSubmit}>
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
          <Button class={[s.button]}>确定</Button>
        </FormItem>
      </Form>
    );
  },
});
