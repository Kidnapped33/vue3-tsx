import { computed, defineComponent, PropType, ref } from "vue";
import { RouterLink } from "vue-router";
import { Icon } from "../../src/shared/Icon";
import s from "./Tags.module.scss";
import { Time } from "./Time";

export const Tags = defineComponent({
  props: {
    kind: {
      type: String as PropType<string>,
      required: true,
    },
    tagsData: {
      type: Array as PropType<
        {
          id?: number;
          name: string;
          sign: string;
          kind: string;
        }[]
      >,
      required: true,
    },
    selected: Number,
  },
  emits: ["update:selected"],
  setup: (props, context) => {
    const tagId = ref<number>();
    const selectChange = (tag: any) => {
      // tagId.value=tag.id
      context.emit("update:selected", tag.id);
    };
    let timer = ref<number|undefined>(undefined);
    let currentTag = ref<HTMLDivElement|undefined>(undefined);

    const onLongPress = () => {
      console.log('long press')
    }
    const onTouchStart = (e: TouchEvent) => {
      currentTag.value = e.target as HTMLDivElement;
      timer.value = setTimeout(() => {
        onLongPress()
      }, 500);
    };
    const onTouchEnd = (e: TouchEvent) => {
       clearTimeout(timer.value);
    };
    const onTouchMove = (e: TouchEvent) => {
      const x = document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY);
      if(currentTag.value?.contains(x) || currentTag.value === x){

      }else{
        clearTimeout(timer.value);
      }

    }
    return () => (
      <div class={s.tags_wrapper} onTouchmove={onTouchMove}>
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
          <div
            class={[s.tag, props.selected === tag.id && s.selected]}
            onClick={() => selectChange(tag)}
            onTouchstart={onTouchStart}
            onTouchend={onTouchEnd}
          >
            <div class={s.sign}>{tag.sign}</div>
            <div class={s.name}>{tag.name}</div>
          </div>
        ))}
      </div>
    );
  },
});
