import { defineComponent, PropType, reactive, toRaw  } from "vue";
import { MainLayout } from "../../layouts/MainLayout";
import { Icon } from "../../shared/Icon";
import { Button } from "../../shared/Button";
import s from "./Tag.module.scss";
import { EmojiSelect } from '../../shared/EmojiSelect';
import { Rules, validate } from '../../shared/validate';
import { RouterLink } from "vue-router";
import { TagForm } from "./TagForm";

export const TagCreate = defineComponent({
  props: { name: { type: String as PropType<string> } },
  setup: (props, context) => {
    return () => (
      <MainLayout>{{
          title: () => "新增标签",
          icon: () => (
                        <RouterLink to='/items/create'> 
                          <Icon name="left"  class={s.navIcon}/> 
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
