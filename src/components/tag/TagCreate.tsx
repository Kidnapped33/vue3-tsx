import { defineComponent, PropType } from "vue";
import { MainLayout } from "../../layouts/MainLayout";
import { Icon } from "../../shared/Icon";

export const TagCreate = defineComponent({
  props: { name: { type: String as PropType<string> } },
  setup: (props, context) => {
    return () => 
      <MainLayout>
        {{
          title: () => "add tag",
          icon: () => <Icon name="left" onClick={() => {}} />,
          default: () => (
            <form>
              <div>
                <label>
                  <span>新建标签</span>
                  <input></input>
                </label>
              </div>
              <div>
                <label>
                  <span>符号</span>
                  <div>
                    <nav>
                      <span>aa</span>
                      <span>bb</span>
                      <span>cc</span>
                      <span>dd</span>
                      <span>ee</span>
                      <span>ff</span>
                    </nav>
                    <ol>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>6</li>
                      <li>7</li>
                      <li>8</li>
                      <li>9</li>
                      <li>10</li>
                    </ol>
                  </div>
                </label>
              </div>
              <div>
                <p>记账时长按标签即可编辑</p>
              </div>
              <div>
                <button>确定</button>
              </div>
            </form>
          ),
        }}
      </MainLayout>;
    ;
  },
});
