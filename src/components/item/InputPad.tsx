import { defineComponent, PropType, ref } from "vue";
import { Icon } from "../../shared/Icon";
import s from "./InputPad.module.scss";
import { Time } from "../../shared/time";
import { DatetimePicker, NumberKeyboard, Popup } from "vant";
import 'vant/es/datetime-picker/style';

export const InputPad = defineComponent({
  props: {
    happenAt:String,
    amount:Number,
  },
  emits:['amount','happenAt'],
  setup: (props,context) => {
    const now = new Date();
    const refDate = ref<Date>(now);
    // const refDate = ref<Date>(new Date())
    const appendText = (n: number | string) => {
      const nString = n.toString();
      if (refAmount.value.length >= 13) return;
      if (nString === ".") {
        /**
         * 关于 .
         * 如果前面没有数字，就0.
         * 如果前面有数字，就直接 .
         * 如果前面已经有 .，就不能再添加 .
         */
        if (refAmount.value.length === 0) {
          refAmount.value = "0.";
        } else if (
          refAmount.value.length !== 0 &&
          refAmount.value.indexOf(".") === -1
        ) {
          refAmount.value += ".";
        } else {
          return;
        }
      } else if (nString === "0") {
        /**
         * 关于 0
         * 如果前面没有数字，就不能添加 0
         * 如果前面有数字，就直接添加 0
         */
        if (refAmount.value === "0") {
          return;
        } else {
          refAmount.value += n;
        }
      } else if (refAmount.value === "0" && refAmount.value.length === 1) {
        /**如果当前是0，输入8，则0变成8 */
        refAmount.value = n.toString(); 
      } else {
        return (refAmount.value += n.toString());
      }
    };
    
    const buttons = [
      { text: "1",onClick: () => { appendText(1)}},
      { text: "2",onClick: () => { appendText(2)}},
      { text: "3",onClick: () => { appendText(3)}},
      { text: "4",onClick: () => { appendText(4)}},
      { text: "5",onClick: () => { appendText(5)}},
      { text: "6",onClick: () => { appendText(6)}},
      { text: "7",onClick: () => { appendText(7)}},
      { text: "8",onClick: () => { appendText(8)}},
      { text: "9",onClick: () => { appendText(9)}},
      { text: ".",onClick: () => { appendText(".")}},
      { text: "0",onClick: () => { appendText(0)}},
      { text: "清空", onClick: () => { refAmount.value = '0'}},
      { text: "提交", onClick: () => context.emit('update:amount',
      parseFloat(refAmount.value) * 100)},
    ];
       /*{"amount":9900,
       "kind":"expenses",
       "happen_at":"2020-10-30T00:00:00+08:00",
       "tag_ids":[3536,3537]}
       */

    const refDatePickerVisible = ref(false);
    const showDatePicker = () => (refDatePickerVisible.value = true);
    const hideDatePicker = () => (refDatePickerVisible.value = false);

    const setDate = (date: Date) => {
      context.emit('update:happenAt', date.toISOString());
      hideDatePicker();
    };
    const refAmount = ref(props.amount ? (props.amount / 100).toString() : '0');
    return () => (
      <>
        <div class={s.dateAndAmount}>
          <span class={s.date}>
            <Icon name="date" class={s.icon} />
            <span>
              <span onClick={showDatePicker}>
                {/* { new Time(refDate.value).format() } */}
                {/* { new Time(refDate.value).firstDayOfMonth().format()} */}
                { new Time(props.happenAt).firstDayOfMonth().format()}
              </span>
              <Popup
                position="bottom"
                v-model:show={refDatePickerVisible.value}
              >
                <DatetimePicker
                  value={props.happenAt}
                  type="date"
                  title="选择年月日"
                  onConfirm={setDate}
                  onCancel={hideDatePicker}
                />
              </Popup>
            </span>
          </span>
          <span class={s.amount}>{refAmount.value}</span>
        </div>
        <div class={s.buttons}>
          {buttons.map((button) => (
            <button class="button" onClick={button.onClick}>{button.text}</button>
          ))}
        </div>
      </>
    );
  },
});
