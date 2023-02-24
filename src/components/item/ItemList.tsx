import { defineComponent, PropType, reactive, ref, watchEffect } from "vue";
import { MainLayout } from "../../layouts/MainLayout";
import { Icon } from "../../shared/Icon";
import { Tab, Tabs } from "../../shared/Tabs";
import { Time } from "../../shared/time";
import s from './ItemList.module.scss';
import { ItemSummary } from "./ItemSummary";
import { Overlay } from 'vant';

export const ItemList = defineComponent({
    props: {
        name: {
          type: String as PropType<string>
        }
      },
      setup: (props, context) => {
        const refSelected = ref<string>('本月')
        const time = new Time()
        // const customTime = ref<string[]>([time.firstDayOfMonth().format(),time.lastDayOfMonth().format()])
        const customTime = reactive({
          start: new Time().format(),
          end: new Time().format()
        })
        const timeList = [
          // '本月'
          {
            start: time.firstDayOfMonth(), 
            end: time.lastDayOfMonth()
          },
          // '上月'
          {
            start: time.add(-1,'month').firstDayOfMonth(),
            end: time.add(-1,'month').lastDayOfMonth(),
          },
          // 今年'
          {
            start: time.firstDayOfYear(),
            end: time.lastDayOfYear()  
          },
        ]

        watchEffect(()=>{
          if(refSelected.value === '自定义起始时间'){
            refOverlayVisible.value = true
          }
        })

        const refOverlayVisible = ref<boolean>(false)
        return () => (
          <MainLayout>
            {{
              title:() => "西瓜记账",
              Icon:() => <Icon name="menu" class={s.navIcon} /> ,
              default:()=>(
              <>
                <Tabs classPrefix={'customTabs'} v-model:selected={refSelected.value}>
                  <Tab name='本月'>
                    <ItemSummary startTime={timeList[0].start.format()} endTime={timeList[0].end.format()} />
                  </Tab>
                  <Tab name='上月'>
                    <ItemSummary startTime={timeList[1].start.format()} endTime={timeList[1].end.format()} />
                  </Tab>
                  <Tab name='今年'>
                    <ItemSummary startTime={timeList[2].start.format()} endTime={timeList[2].end.format()} />
                  </Tab>
                  <Tab name='自定义起始时间'>
                    <ItemSummary startTime={customTime.start} endTime={customTime.end}/>
                  </Tab>
                  
                </Tabs>
                <Overlay show={refOverlayVisible.value} class={s.overlay}>
                  <div class={s.overlay_inner} >
                    <header>
                      请选择时间
                    </header>
                    <main>
                      <form>
                        <div>
                          <label>开始时间</label>
                        </div>
                        <input></input>
                        <div>
                          <label>结束时间</label>
                        </div>
                        <input></input>
                      </form>
                    </main>
                  </div>
                </Overlay>
               </>
              )
            }}
          </MainLayout>
        )
      }
})