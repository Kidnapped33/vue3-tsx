import { defineComponent, PropType } from "vue";
import { MainLayout } from "../../layouts/MainLayout";
import s from './Tag.module.scss';
import { Button } from "../../shared/Button";
import { TagForm } from "./TagForm";
import { BackIcon } from "../../shared/BackIcon";
import { useRoute } from "vue-router";

export const TagEdit = defineComponent({
  props: { name: { type: String as PropType<string> } },
  setup: (props, context) => {
    const route = useRoute()
    const numberId = parseInt(route.query.id!.toString())
    if(Number.isNaN(numberId)){
      return () => { <div> id 不存在</div>}
    }
    return () => (
        <MainLayout>{{
          title: () => '编辑标签',
          icon: () => <BackIcon />,
          default: () => (
              <div>
                <TagForm id={numberId}/>
                <div class={s.editButtons}>
                  <Button class={s.editButton} level='danger'>删除标签和记账</Button>
                </div>
              </div>
          )
        }}</MainLayout>
    );
  }
});
