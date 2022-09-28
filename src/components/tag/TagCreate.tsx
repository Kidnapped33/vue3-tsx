import { defineComponent, PropType, reactive, toRaw  } from "vue";
import { MainLayout } from "../../layouts/MainLayout";
import { Icon } from "../../shared/Icon";
import { Button } from "../../shared/Button";
import s from "./TagCreate.module.scss";
import { EmojiSelect } from '../../shared/EmojiSelect';

export const TagCreate = defineComponent({
  props: { name: { type: String as PropType<string> } },
  setup: (props, context) => {
    const formData = reactive({
      name: '',
      sign: '',
    })
    const onSubmit = (e:Event) => {
      console.log('formData',formData)
      console.log('toRaw的formData',toRaw(formData))

      // const errors = validate(formData)
      const errors = 'errors333'
      e.preventDefault()
    }
    return () => (
      <MainLayout>
        {{
          title: () => "新增标签",
          icon: () => <Icon name="left" onClick={() => {}} />,
          default: () => (
            <form class={s.form} onSubmit={onSubmit}>
              <div class={s.formRow}>
                <label class={s.formLabel}>
                  <span class={s.formItem_name}>标签名</span>
                  <div class={s.formItem_value}>
                    <input v-model={formData.name} class={[s.formItem, s.input, s.error]}></input>
                  </div>
                  <div class={s.formItem_errorHint}>
                    <span>必填{Error}</span>
                  </div>
                </label>
              </div>
              <div class={s.formRow}>
                <label class={s.formLabel}>
                  <span class={s.formItem_name}>符号 {formData.sign}</span>
                  <div class={s.formItem_value}>
                    {/* <div class={[s.formItem, s.emojiList, s.error]}>
                      <nav>
                        <span class={s.selected}>表情</span>
                        <span>手势</span>
                        <span>职业</span>
                        <span>衣服</span>
                        <span>动物</span>
                        <span>自然</span>
                      </nav>
                      <ol>
                        <li>😀</li>
                        <li>😀</li>
                        <li>😀</li>
                        <li>😀</li>
                        <li>😀</li>
                        <li>😀</li>
                        <li>😀</li>
                        <li>😀</li>
                      </ol>
                    </div> */}
                     <EmojiSelect v-model={formData.sign} class={[s.formItem, s.emojiList, s.error]} />
                  </div>
                </label>
              </div>
              <p class={s.tips}>记账时长按标签即可进行编辑</p>
              <div class={s.formRow}>
                <div class={s.formItem_value}>
                  <Button class={[s.formItem, s.button]}>确定</Button>
                </div>
              </div>
            </form>
          ),
        }}
      </MainLayout>
    );
  },
});
