import { defineComponent, PropType } from "vue";
import { MainLayout } from "../../layouts/MainLayout";
import s from "./Tag.module.scss";
import { Button } from "../../shared/Button";
import { TagForm } from "./TagForm";
import { BackIcon } from "../../shared/BackIcon";
import { useRoute, useRouter } from "vue-router";
import { deleteTag } from "../../api/watermelon/api";
import { Dialog } from "vant";

export const TagEdit = defineComponent({
  props: { name: { type: String as PropType<string> } },
  setup: (props, context) => {
    const route = useRoute();
    const router = useRouter();
    const numberId = parseInt(route.query.id!.toString());
    if (Number.isNaN(numberId)) {
      return () => {
        <div> id 不存在</div>;
      };
    }
    const onDeleteTag = async (numberId: number) => {
      await Dialog.confirm({
        title: "删除标签",
        message: "该标签下的所有记账也会被删除且无法恢复，确定删除吗？",
      });
      await deleteTag(numberId);
      console.log("删除成功");
      router.back();
    };
    return () => (
      <MainLayout>
        {{
          title: () => "编辑标签",
          icon: () => <BackIcon />,
          default: () => (
            <div>
              <TagForm id={numberId} />
              <div class={s.editButtons}>
                <Button
                  class={s.editButton}
                  level="danger"
                  onclick={() => onDeleteTag(numberId)}
                >
                  删除标签和记账
                </Button>
              </div>
            </div>
          ),
        }}
      </MainLayout>
    );
  },
});
