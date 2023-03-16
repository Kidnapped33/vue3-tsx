import { defineComponent, onMounted, PropType, reactive, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { MainLayout } from "../../layouts/MainLayout";
import { Icon } from "../../shared/Icon";
import { Tab, Tabs } from "../../shared/Tabs";
import { Tags } from "../../shared/Tags";
import { InputPad } from "./InputPad";
import s from "./ItemCreate.module.scss";
import { addRecordItem, getTags } from "../../api/watermelon/api";

export const ItemCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    interface Tag {
      // id: number;
      name: string;
      sign: string;
      kind: string;
    }

    const expensesList = ref<Tag[]>([
      // { name: "餐饮", sign: "🍔", kind: "expenses" }
    ]);
    const incomeList = ref<Tag[]>([
      // { name: "222", sign: "🍔", kind: "income" }
    ]);

    onMounted(async () => {
      const allList = await getTags({ page: 1 });
      expensesList.value =
        allList?.data?.resources?.filter(
          (item: Tag) => item.kind === "expenses"
        ) || [];
      incomeList.value =
        allList?.data?.resources?.filter(
          (item: Tag) => item.kind === "income"
        ) || [];
    });

    enum RefKind {
      // expenses = "expenses", // 支出
      // income = "income", // 收入
      expenses = "支出", // 支出
      income = "收入", // 收入
    }

    const formData = reactive({
      refKind: RefKind.expenses,
      refTagId: undefined,
      refAmount: 0,
      refHappenAt: new Date().toISOString(),
    });

    const onSubmit = async () => {
      // e.preventDefault();
      if (!formData.refTagId) return alert("please chose tag");
      const data = {
        amount: formData.refAmount,
        kind: formData.refKind === "支出" ? "expenses" : "income",
        happen_at: formData.refHappenAt,
        tag_ids: [formData.refTagId],
      };
      const res = await addRecordItem(data);
      if (res) alert("添加成功");
    };

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
                  <Tabs v-model:selected={formData.refKind} class={s.tabs}>
                    <Tab name={RefKind.expenses}>
                      <Tags
                        kind={formData.refKind}
                        tagsData={expensesList.value}
                        v-model:selected={formData.refTagId}
                      />
                    </Tab>
                    <Tab name={RefKind.income}>
                      <Tags
                        kind={formData.refKind}
                        tagsData={incomeList.value}
                        v-model:selected={formData.refTagId}
                      />
                    </Tab>
                  </Tabs>
                  <div class={s.inputPad_wrapper}>
                    <InputPad
                      v-model:amount={formData.refAmount}
                      v-model:happenAt={formData.refHappenAt}
                      onSubmit={onSubmit}
                    />
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
