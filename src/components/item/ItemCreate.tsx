import { defineComponent, onMounted, PropType, reactive, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { MainLayout } from "../../layouts/MainLayout";
import { Icon } from "../../shared/Icon";
import { Tab, Tabs } from "../../shared/Tabs";
import { Tags } from "../../shared/Tags";
import { InputPad } from "./InputPad";
import s from "./ItemCreate.module.scss";
import { addRecordItem, getTags } from "../../api/watermelon/api";
import { BackIcon } from "../../shared/BackIcon";
import  { Dialog, Notify }  from "vant";
import { useRouter } from "vue-router";

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

    const router = useRouter()

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
      expenses = "支出", // 支出
      income = "收入", // 收入
    }

    const formData = reactive({
      refKind: RefKind.expenses,
      refTagId: undefined,
      refAmount: 0,
      // refHappenAt: new Date().toISOString(),
      refHappenAt: new Date(),
    });

    const onSubmit = async () => {
      if (!formData.refTagId){
        return Dialog({
          title: "提示",
          message: "请选择标签",
        })
      }
      const data = {
        amount: formData.refAmount,
        kind: formData.refKind === "支出" ? "expenses" : "income",
        happen_at: formData.refHappenAt,
        tag_ids: [formData.refTagId],
      };
      const res = await addRecordItem(data);
      if (res) {
        Notify({ type: 'success', message: '添加成功' });
        router.push('/items');
      };
    };

    return () => (
      <div>
        <MainLayout class={s.layout}>
          {{
            icon: () => (
              <RouterLink to="/start">
                <BackIcon class={s.navIcon} />
              </RouterLink>
            ),
            title: () => "记一笔",
            default: () => (
              <>
                <div class={s.wrapper}>
                  <Tabs v-model:selected={formData.refKind} class={s.tabs}
                        v-model:clearSelectedTag={formData.refTagId}
                  >
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
