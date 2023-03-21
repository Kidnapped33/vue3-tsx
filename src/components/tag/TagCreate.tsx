import { defineComponent, PropType } from "vue";
import { MainLayout } from "../../layouts/MainLayout";
import { Icon } from "../../shared/Icon";
import s from "./Tag.module.scss";
import { RouterLink } from "vue-router";
import { TagForm } from "./TagForm";
import { BackIcon } from "../../shared/BackIcon";

export const TagCreate = defineComponent({
  props: { name: { type: String as PropType<string> } },
  setup: (props, context) => {
    return () => (
      <MainLayout>{{
          title: () => "新增标签",
          icon: () => (
                        <RouterLink to='/items/create'> 
                          <BackIcon class={s.navIcon}/>
                        </RouterLink>
                      ) ,
          default: () => (
            <div>
              <TagForm/>
            </div>
          ),
        }}</MainLayout>
    );
  },
});
