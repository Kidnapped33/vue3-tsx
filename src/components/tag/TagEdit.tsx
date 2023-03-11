import { Icon } from "../../shared/Icon";
import { defineComponent, PropType } from "vue";
import { MainLayout } from "../../layouts/MainLayout";
import s from './Tag.module.scss';
import { Button } from "../../shared/Button";
import { TagForm } from "./TagForm";

export const TagEdit = defineComponent({
  props: { name: { type: String as PropType<string> } },
  setup: (props, context) => {
    return () => (
        <MainLayout>{{
          title: () => '编辑标签',
          icon: () => <Icon name="left" onClick={() => { }} />,
          default: () => (
              <div>
                <TagForm/>
                <div class={s.editButtons}>
                  <Button class={s.editButton} level='danger'>删除标签和记账</Button>
                </div>
              </div>
          )
        }}</MainLayout>
    );
  }
});
