import { defineComponent, PropType, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { MainLayout } from "../../layouts/MainLayout";
import { Icon } from "../../shared/Icon";
import { Tab, Tabs } from "../../shared/Tabs";
import { InputPad } from "./InputPad";
import s from "./ItemCreate.module.scss";
export const ItemCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    interface Tag {
      id: number;
      name: string;
      sign: string;
      category: string;
    }

    enum RefKind {
      expenses = "支出", // 支出
      income = "收入", // 收入
    }

    const refKind = ref<RefKind>(RefKind.expenses);

    
    const refExpensesTags = ref<Tag[]>([
      { id: 1, name: "餐饮", sign: "🍔", category: "expenses" },
      { id: 2, name: "打车", sign: "￥", category: "expenses" },
      { id: 3, name: "聚餐", sign: "￥", category: "expenses" },
      { id: 4, name: "打车", sign: "￥", category: "expenses" },
      { id: 5, name: "聚餐", sign: "￥", category: "expenses" },
      { id: 6, name: "打车", sign: "￥", category: "expenses" },
      { id: 7, name: "聚餐", sign: "￥", category: "expenses" },
    ]);
    const refIncomeTags = ref<Tag[]>([
      // { id: 4, name: "工资", sign: "￥", category: "income" },
      // { id: 5, name: "彩票", sign: "￥", category: "income" },
      // { id: 6, name: "滴滴", sign: "￥", category: "income" },
      // { id: 11, name: "彩票", sign: "￥", category: "income" },
    ]);

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
                    <Tab name="支出" class={s.tags_wrapper}>
                      <div class={s.tag}>
                        <RouterLink to="/tags/create">
                        {/* <RouterLink to={{path:'/tags/create', query:{ }}}> */}
                          <div class={s.sign}>
                            <Icon name="add" class={s.createTag} />
                          </div>
                        <div class={s.name}>新增1</div>
                        </RouterLink>
                      </div>
                      {refExpensesTags.value.map((tag) => (
                        <div class={[s.tag, s.selected]}>
                          <div class={s.sign}>{tag.sign}</div>
                          <div class={s.name}>{tag.name}</div>
                        </div>
                      ))}
                    </Tab>
                    <Tab name="收入" class={s.tags_wrapper}>
                      <div class={s.tag}>
                        <RouterLink to={{path:'/tags/create'}}>
                        {/* <RouterLink to="/tags/create"> */}
                          <div class={s.sign}>
                            <Icon name="add" class={s.createTag} />
                          </div>
                          <div class={s.name}>新增</div>
                        </RouterLink>
                      </div>
                      {refIncomeTags.value.map((tag) => (
                        <div class={[s.tag, s.selected]}>
                          <div class={s.sign}>{tag.sign}</div>
                          <div class={s.name}>{tag.name}</div>
                        </div>
                      ))}
                    </Tab>
                  </Tabs>
                  <div class={s.inputPad_wrapper}>
                    <InputPad />
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
