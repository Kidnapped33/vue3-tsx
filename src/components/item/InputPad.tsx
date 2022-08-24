import { defineComponent, PropType, ref } from "vue";
import { Icon } from "../../shared/Icon";
import s from "./InputPad.module.scss";
import { time } from "../../shared/time";
import { DatetimePicker, Popup } from "vant";
// import { DatetimePicker  } from 'vant';

export const InputPad = defineComponent({
  props: {
    name: {
      type: String as PropType<String>,
    },
  },
  setup: () => {
    const now = new Date();
    const refDate = ref<Date>(now);
    // const refDate = ref<Date>(new Date())
    const buttons = [
      { text: "1", onClick: () => {} },
      { text: "2", onClick: () => {} },
      { text: "3", onClick: () => {} },
      { text: "清空", onClick: () => {} },
      { text: "4", onClick: () => {} },
      { text: "5", onClick: () => {} },
      { text: "6", onClick: () => {} },
      { text: "+", onClick: () => {} },
      { text: "7", onClick: () => {} },
      { text: "8", onClick: () => {} },
      { text: "9", onClick: () => {} },
      { text: "-", onClick: () => {} },
      { text: ".", onClick: () => {} },
      { text: "0", onClick: () => {} },
      { text: "删", onClick: () => {} },
      { text: "提交", onClick: () => {} },
    ];
    const refShowPop = ref(false);
    return () => (
      <>
        <div>
          <span onClick={() => (refShowPop.value = true)}>test</span>
          <Popup position="bottom" v-model:show={refShowPop.value}>
            {/* <DatetimePicker
                  v-model:value={refDate.value}
                  type="date"
                  title="选择年月日"
                /> */}
          </Popup>
        </div>
        <div class={s.dateAndAmount}>
          <span class={s.date}>
            <Icon name="date" class={s.icon} />
            <span>
              {/* 2022-01-01 */}
              {/* <input type="date" value={time(now).format()} /> */}
              <span onClick={() => (refShowPop.value = true)}>
                {time(refDate.value).format()}
              </span>
              <Popup position="bottom" v-model:show={refShowPop.value}>
                {/* <DatetimePicker
                v-model={refDate.value}
                type="date"
                title="选择年月日"
                onConfirm={() => (refShowPop.value = false)}
              /> */}
                <DatetimePicker
                  v-model:value={refDate.value}
                  type="date"
                  title="选择年月日"
                />
              </Popup>
            </span>
          </span>
          <span class={s.amount}>0</span>
        </div>
        <div class={s.buttons}>
          {buttons.map((button) => (
            <button onClick={button.onClick}>{button.text}</button>
          ))}
        </div>
      </>
    );
  },
});
