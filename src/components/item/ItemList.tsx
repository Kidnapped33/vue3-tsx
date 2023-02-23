import { defineComponent, PropType, ref } from "vue";
import { MainLayout } from "../../layouts/MainLayout";
import { Icon } from "../../shared/Icon";
import { Tab, Tabs } from "../../shared/Tabs";
import s from './ItemList.module.scss';

export const ItemList = defineComponent({
    props: {
        name: {
          type: String as PropType<string>
        }
      },
      setup: (props, context) => {
        const refSelected = ref<string>('本月')
        return () => (
          <MainLayout>
            {{
              title:() => "西瓜记账",
              Icon:() => <Icon name="menu" class={s.navIcon} /> ,
              default:()=>(
               <Tabs classPrefix={'customTabs'} v-model:selected={refSelected.value}>
                <Tab name='本月'>
                  <div>
                    <div>收入</div>
                    <div>支出</div>
                    <div>净收入</div>
                  </div>
                  本月123123
                </Tab>
                <Tab name='上月'>上月</Tab>
                <Tab name='今年'>今年</Tab>
                <Tab name='自定义起始时间'>自定义起始时间</Tab>
               </Tabs>
              )
            }}
          </MainLayout>
        )
      }
})