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
        id?: number;
        name: string;
        sign: string;
        kind: string;
      }[]>,
      required: true
    },
    selected: Number
  },
  emits:['update:selected'],
  setup: (props, context) => {
    const tagId = ref<number>()
    const selectChange = (tag: any)=> {
      // tagId.value=tag.id
      context.emit('update:selected',tag.id)
    }

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
          <div class={[s.tag,   props.selected === tag.id && s.selected]} onClick={()=>selectChange(tag)}>
            <div class={s.sign}>{tag.sign}</div>
            <div class={s.name}>{tag.name}</div>
          </div>
        ))}
      </div>
    );
  },
});
