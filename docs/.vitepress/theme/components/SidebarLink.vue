<script>
import { h } from "vue";
import { useData, useRoute } from "vitepress";
import { isActive, hashRE, groupHeaders } from "../util";

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { item } = props;
    const { theme } = useData();
    const route = useRoute();

    const renderLink = (h, to, text, active) => {
      return h(
        "a",
        {
          href: to,
          activeClass: "",
          exactActiveClass: "",
          class: {
            active,
            "sidebar-link": true,
          },
        },
        text
      );
    };

    const renderChildren = (h, children, path, route, maxDepth, depth = 1) => {
      if (!children || depth > maxDepth) {
        return null;
      }
      return h(
        "ul",
        { class: "sidebar-sub-headers" },
        children.map((c) => {
          const active = isActive(route, path + "#" + c.slug);
          return h("li", { class: "sidebar-sub-header" }, [
            renderLink(h, path + "#" + c.slug, c.title, active),
            renderChildren(h, c.children, path, route, maxDepth, depth + 1),
          ]);
        })
      );
    };

    return () => {
      const selfActive = isActive(route, item.link);
      const link = renderLink(h, item.link, item.text || item.link, selfActive);
      const configDepth = theme.value.sidebarDepth;
      const maxDepth = configDepth === null ? 1 : configDepth;
      const displayAllHeaders = theme.value.displayAllHeaders;

      if (
        (selfActive || displayAllHeaders) &&
        item.headers &&
        !hashRE.test(item.link)
      ) {
        const children = groupHeaders(item.headers);
        return [link, renderChildren(h, children, item.link, route, maxDepth)];
      } else {
        return link;
      }
    };
  },
};
</script>

<style lang="scss">
a.sidebar-link {
  font-size: 16px;
  font-weight: bold;
  display: inline-block;
  color: var(--text-color);
  line-height: 2;
  width: 100%;
  box-sizing: border-box;

  &.active {
    position: relative;
    color: var(--accent-color);
    font-weight: bold;
  }

  &:hover {
    color: var(--accent-color);
  }
}
</style>
