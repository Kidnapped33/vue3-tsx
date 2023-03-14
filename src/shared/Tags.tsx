import { computed, defineComponent, PropType, ref } from "vue";
import { RouterLink } from "vue-router";
import { Icon } from "../../src/shared/Icon";
import s from "./Tags.module.scss";

export const Tags = defineComponent({
  props: {
    kind:{
      type: String as PropType<string>,
      required: true
    },
    tagsData:{
      type: Array as PropType<{
        // id: number;
        name: string;
        sign: string;
        kind: string;
      }[]> | undefined,
      required: true
    },
  },
  setup: (props, context) => {
    // interface Tag {
    //   // id: number;
    //   name: string;
    //   sign: string;
    //   kind: string;
    // }

    /**refExpensesTags /  refIncomeTags*/
    // const refTags = ref<Tag[]>([
      // { name: "餐饮", sign: "🍔", kind: "expenses" }
    // ]);

    // refTags.value = computed(() => props.tagsData as Tag[])


    return () => (
      <div class={s.tags_wrapper}>
        <div class={s.tag}>
          <RouterLink to={`/tags/create?kind=${props.kind}`}>
            {/* <RouterLink to={{path:'/tags/create', query:{ }}}> */}
            <div class={s.sign}>
              <Icon name="add" class={s.createTag} />
            </div>
            <div class={s.name}>新增</div>
          </RouterLink>
        </div>
        {props.tagsData?.map((tag) => (
          <div class={[s.tag, s.selected]}>
            <div class={s.sign}>{tag.sign}</div>
            <div class={s.name}>{tag.name}</div>
          </div>
        ))}
      </div>
    );
  },
});
