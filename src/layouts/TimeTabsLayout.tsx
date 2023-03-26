import { defineComponent, onMounted, PropType, reactive, ref } from "vue";
import { Form, FormItem } from "../shared/Form";
import { Overlay } from "vant";
import { Tab, Tabs } from "../shared/Tabs";
import { Time } from "../shared/time";
import s from "./TimeTabsLayout.module.scss";
import { staticMenu } from "../api/watermelon/api";
const demo = defineComponent({
  props: {
    startTime: {
      type: String as PropType<string>,
      required: false,
    },
    endTime: {
      type: String as PropType<string>,
      required: false,
    },
  },
});
export const TimeTabsLayout = defineComponent({
  props: {
    component: {
      type: Object as PropType<typeof demo>,
      required: true,
    },
  },
  setup: (props, context) => {
    const refSelected = ref<string>("本月");
    const time = new Time();
    /**临时时间，等确认再传给customTime */
    const tempTime = reactive({
      start: new Time().format(),
      end: new Time().format()
    })
    /**自定义时间 */
    const customTime = reactive<{
      start?: string;
      end?: string;
    }>({});
    const timeList = reactive( [
      // '本月'
      {
        start: time.firstDayOfMonth(),
        end: time.lastDayOfMonth(),
      },
      // '上月'
      {
        start: time.add(-1, "month").firstDayOfMonth(),
        end: time.add(-1, "month").lastDayOfMonth(),
      },
      // 今年'
      {
        start: time.firstDayOfYear(),
        end: time.lastDayOfYear(),
      },
    ]);
    const refOverlayVisible = ref<boolean>(false);
    const onSubmitCustomTime = (e: Event) => {
      console.log("onSubmit", timeList);
      Object.assign(customTime, tempTime);
      e.preventDefault();
      refOverlayVisible.value = false;
    };

    return () => (
      <>
        <Tabs
          classPrefix={"customTabs"}
          v-model:selected={refSelected.value}
          onUpdate:selected={() =>
            (refOverlayVisible.value = refSelected.value === "自定义起始时间")
          }
        >
          <Tab name="本月">
            <props.component
              startTime={timeList[0].start.format()}
              endTime={timeList[0].end.format()}
            />
          </Tab>
          <Tab name="上月">
            <props.component
              startTime={timeList[1].start.format()}
              endTime={timeList[1].end.format()}
            />
          </Tab>
          <Tab name="今年">
            <props.component
              startTime={timeList[2].start.format()}
              endTime={timeList[2].end.format()}
            />
          </Tab>
          <Tab name="自定义起始时间">
            <props.component
              startTime={customTime.start}
              endTime={customTime.end}
            />
          </Tab>
        </Tabs>
        <Overlay show={refOverlayVisible.value} class={s.overlay}>
          <div class={s.overlay_inner}>
            <header>请选择时间</header>
            <main>
              <Form onSubmit={onSubmitCustomTime}>
                <FormItem
                  label="开始时间"
                  v-model={tempTime.start}
                  type="date"
                />
                <FormItem
                  label="结束时间"
                  v-model={tempTime.end}
                  type="date"
                />
                <FormItem>
                  <div class={s.actions}>
                    <button
                      type="button"
                      onClick={() => (refOverlayVisible.value = false)}
                    >
                      取消
                    </button>
                    <button type="submit">确认</button>
                  </div>
                </FormItem>
              </Form>
            </main>
          </div>
        </Overlay>
      </>
    );
  },
});
