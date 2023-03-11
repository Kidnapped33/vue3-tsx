import { defineComponent, PropType, ref } from "vue";
import { RouterLink } from "vue-router";
import { Icon } from "../../src/shared/Icon";
import s from "./Tags.module.scss";

export const Tags = defineComponent({
  props: {
    kind:{
      type: String as PropType<string>,
      required: true
    }
  },

  setup: (props, context) => {

    interface Tag {
      id: number;
      name: string;
      sign: string;
      category: string;
    }

    /**refExpensesTags /  refIncomeTags*/
    const refTags = ref<Tag[]>([
      { id: 1, name: "餐饮", sign: "🍔", category: "expenses" },
      // { id: 2, name: "打车", sign: "￥", category: "expenses" },
      // { id: 3, name: "聚餐", sign: "￥", category: "expenses" },
      // { id: 4, name: "打车", sign: "￥", category: "expenses" },
      // { id: 5, name: "聚餐", sign: "￥", category: "expenses" },
      // { id: 6, name: "打车", sign: "￥", category: "expenses" },
      // { id: 7, name: "聚餐", sign: "￥", category: "expenses" },
    ]);


    return () => (
      <div class={s.tags_wrapper}>
        <div class={s.tag}>
          <RouterLink to={"/tags/create"}>
            {/* <RouterLink to={{path:'/tags/create', query:{ }}}> */}
            <div class={s.sign}>
              <Icon name="add" class={s.createTag} />
            </div>
            <div class={s.name}>新增</div>
          </RouterLink>
        </div>
        {refTags.value.map((tag) => (
          <div class={[s.tag, s.selected]}>
            <div class={s.sign}>{tag.sign}</div>
            <div class={s.name}>{tag.name}</div>
          </div>
        ))}
      </div>
    );
  },
});
