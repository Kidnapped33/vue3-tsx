import { defineComponent, onMounted, PropType, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { MainLayout } from "../../layouts/MainLayout";
import { Icon } from "../../shared/Icon";
import { Tab, Tabs } from "../../shared/Tabs";
import { Tags } from "../../shared/Tags";
import { InputPad } from "./InputPad";
import s from "./ItemCreate.module.scss";
import { getTags } from "../../api/watermelon/api";

export const ItemCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {

    enum RefKind {
      expenses = "expenses", // 支出
      income = "income", // 收入
    }

    const refKind = ref<RefKind>(RefKind.expenses);

    interface Tag {
      // id: number;
      name: string;
      sign: string;
      kind: string;
    }

    const expensesList = ref<Tag[]>([
      // { name: "餐饮", sign: "🍔", kind: "expenses" }
    ])
    const incomeList = ref<Tag[]>([
      // { name: "222", sign: "🍔", kind: "income" }
    ])

    onMounted(
        async () => {
          const allList = await getTags({page:1})
          expensesList.value = allList?.data?.resources?.filter((item:Tag)=>item.kind==='expenses') || []
          incomeList.value = allList?.data?.resources?.filter((item:Tag)=>item.kind==='income') || []
      },
    )
    // TagId
    const refTagId = ref<number>()

    // 金额
    const refAmount = ref<number>()
    // 日期
    const refHappen_at = ref<string>(new Date().toISOString())

    return () => (
      <div>
        <MainLayout class={s.layout}>
          {{
            icon: () => (
              <RouterLink to="/start">
                <Icon name="left" class={s.navIcon}></Icon>
              </RouterLink>
            ),
            title: () => "记一笔",
            default: () => (
              <>
                <div class={s.wrapper}>
                  <Tabs v-model:selected={refKind.value} class={s.tabs}>
                    <Tab name={RefKind.expenses}>
                      <Tags kind={refKind.value} tagsData={expensesList.value} v-model:selected={refTagId.value}/>
                    </Tab>
                    <Tab name={RefKind.income}>
                      <Tags kind={refKind.value} tagsData={incomeList.value} v-model:selected={refTagId.value}/>
                    </Tab>
                  </Tabs>
                  <div class={s.inputPad_wrapper}>
                    {refKind.value}
                    {refTagId.value}
                    {refAmount.value}
                    {refHappen_at.value}
                    <InputPad v-model:amount={refAmount.value} v-model:happenAt={refHappen_at.value}/>
                  </div>
                </div>
              </>
            ),
          }}
        </MainLayout>
      </div>
    );
  },
});
