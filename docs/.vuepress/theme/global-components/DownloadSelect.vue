<template lang="pug">
.download-links
  ol.context-menu
    li.context-menu--option.open(
      data-value="",
      @click="openFile"
    ) Open (Slow)
    li.context-menu--option.download(
      data-value="",
      data-name="",
      @click="downloadFile"
    ) Download
    li.context-menu--option.link(data-value="", @click="copyLink") Copy Link
  //- AllPrintings. Uses multiple file types including SQL
  .download-links-list--wrapper(v-if="fileName === 'AllPrintings'")
    p.download-links-list--header(@click="showList") Select a file to download
    ol.download-links-list
      li.download-links-list--item(disabled) JSON
      li.download-links-list--item(
        @click="showContextMenu",
        :data-value="`${$api}${fileName}.json`"
      ) {{ `${fileName}.json` }}
      li.download-links-list--item(disabled) JSON Compressed
      li.download-links-list--item(
        @click="showContextMenu",
        v-for="(format, key) in compressedFormats",
        :key="`json-${format}`",
        :data-value="`${$api}${fileName}.json.${format}`"
      ) {{ `${fileName}.json.${format}` }}
    ol.download-links-list
      li.download-links-list--item(disabled) SQL
      li.download-links-list--item(
        @click="showContextMenu",
        :data-value="`${$api}${fileName}.sql`"
      ) {{ `${fileName}.sql` }}
      li.download-links-list--item(disabled) SQL Compressed
      li.download-links-list--item(
        @click="showContextMenu",
        v-for="(format, key) in compressedFormats",
        :key="`sql-${format}`",
        :data-value="`${$api}${fileName}.sql.${format}`"
      ) {{ `${fileName}.sql.${format}` }}
    ol.download-links-list
      li.download-links-list--item(disabled) SQLite
      li.download-links-list--item(
        @click="showContextMenu",
        :data-value="`${$api}${fileName}.sqlite`"
      ) {{ `${fileName}.sqlite` }}
      li.download-links-list--item(disabled) SQLite Compressed
      li.download-links-list--item(
        @click="showContextMenu",
        v-for="(format, key) in compressedFormats",
        :key="`sqlite-${format}`",
        :data-value="`${$api}${fileName}.sqlite.${format}`"
      ) {{ `${fileName}.sqlite.${format}` }}
  //- Files. Uses compressed formats
  .download-links-list--wrapper(v-else-if="fileName.includes('Files')")
    p.download-links-list--header(@click="showList") Select a file to download
    ol.download-links-list
      li.download-links-list--item(disabled) Files Compressed
      li.download-links-list--item(
        @click="showContextMenu",
        :data-value="`${$api}${fileName}.zip`"
      ) {{ `${fileName}.zip` }}
      li.download-links-list--item(
        @click="showContextMenu",
        v-for="(format, key) in compressedFormats",
        :key="`file-${format}`",
        :data-value="`${$api}${fileName}.tar.${format}`"
      ) {{ `${fileName}.tar.${format}` }}
  //- Decks. Uses a specific path
  .download-links-list--wrapper(v-else-if="fileType === 'AllDecks'")
    p.download-links-list--header(@click="showList") Select a file to download
    ol.download-links-list
      li.download-links-list--item(disabled) JSON
      li.download-links-list--item(
        @click="showContextMenu",
        :data-value="`${$api}decks/${fileName}.json`"
      ) {{ `${fileName}.json` }}
      li.download-links-list--item(disabled) JSON Compressed
      li.download-links-list--item(
        @click="showContextMenu",
        v-for="(format, key) in compressedFormats",
        :key="`json-${format}`",
        :data-value="`${$api}decks/${fileName}.json.${format}`"
      ) {{ `${fileName}.json.${format}` }}
  //- All others.
  .download-links-list--wrapper(v-else)
    p.download-links-list--header(@click="showList") Select a file to download
    ol.download-links-list
      li.download-links-list--item(disabled) JSON
      li.download-links-list--item(
        @click="showContextMenu",
        :data-value="`${$api}${fileName}.json`"
      ) {{ `${fileName}.json` }}
      li.download-links-list--item(disabled) JSON Compressed
      li.download-links-list--item(
        @click="showContextMenu",
        v-for="(format, key) in compressedFormats",
        :key="`json-${format}`",
        :data-value="`${$api}${fileName}.json.${format}`"
      ) {{ `${fileName}.json.${format}` }}
</template>

<script>
export default {
  name: "DownloadSelect",
  props: ["fileName", "fileType"],
  data() {
    return {
      compressedFormats: ["bz2", "gz", "xz", "zip"]
    };
  },
  methods: {
    /**
     * It is worth noting here that, locally, when downloading a regular JSON file
     * the browser will attempt to open it in itself, this has to do with x-origin
     * issues and should not be the case when live on the server.
     */
    downloadFile(e) {
      const $target = e.target || e.currentTarget;
      const url = $target.dataset.value;
      const fileName = $target.dataset.name;
      const $contextMenu = $target.parentElement.parentElement.firstChild;
      const placeHolderAnchor = document.createElement("a");
      let $anchorElement;

      placeHolderAnchor.id = "temp-anchor";
      placeHolderAnchor.href = url;
      placeHolderAnchor.download = fileName;
      placeHolderAnchor.target = "_blank";

      document.body.appendChild(placeHolderAnchor);

      $anchorElement = document.querySelector("#temp-anchor");

      placeHolderAnchor.click();

      document.body.removeChild($anchorElement);

      $contextMenu.classList.remove("show");

      this.resetContextMenu();
    },
    openFile(e) {
      const $target = e.target || e.currentTarget;
      const url = $target.dataset.value;

      this.resetContextMenu();

      window.open(url, '_blank').focus();
    },
    copyLink(e) {
      const $target = e.target || e.currentTarget;
      const $contextMenu = $target.parentElement.parentElement.firstChild;
      const $textArea = document.createElement("textarea");
      const url = $target.dataset.value;

      $textArea.value = url;
      $textArea.style.top = "0";
      $textArea.style.left = "0";
      $textArea.style.opacity = "0";
      $textArea.style.position = "fixed";
      $textArea.style.pointerEvents = "none";

      document.body.appendChild($textArea);

      $textArea.focus();
      $textArea.select();

      document.execCommand("copy");
      document.body.removeChild($textArea);

      $contextMenu.classList.remove("show");

      this.resetContextMenu();
    },
    showList(e) {
      const $target = e.target || e.currentTarget;
      const $list = $target.parentElement;
      const $otherLists = document.querySelectorAll(
        ".download-links-list--wrapper"
      );

      $otherLists.forEach(($olist) => {
        if ($olist !== $list) {
          $olist.classList.remove("show");
          $olist.style.paddingBottom = "0.75rem";
          $olist.style.position = "relative";
        }
      });

      this.resetContextMenu();

      if (!$list.classList.contains("show")) {
        $list.classList.add("show");
        $list.style.paddingBottom = $list.clientHeight + "px";
        $list.style.position = "absolute";
      } else {
        $list.classList.remove("show");
        $list.style.paddingBottom = "0.75rem";
        $list.style.position = "relative";
      }
    },
    showContextMenu(e) {
      const $target = e.target || e.currentTarget;
      const $list = $target.parentElement;
      const $parent = $list.parentElement;
      const $mainParent = $parent.parentElement;
      const $contextMenu = $mainParent.firstChild;

      const $link = $target.dataset.value;

      const $contextMenuOpenItem = $contextMenu.children[0];
      const $contextMenuDownloadItem = $contextMenu.children[1];
      const $contextMenuLinkItem = $contextMenu.children[2];

      this.resetContextMenu();

      $contextMenuOpenItem.dataset.value = $link;
      $contextMenuDownloadItem.dataset.value = $link;
      $contextMenuDownloadItem.dataset.name = $target.innerText;
      $contextMenuLinkItem.dataset.value = $link;

      $contextMenu.style.left = $parent.offsetWidth + "px";
      $contextMenu.style.top = $target.offsetTop + "px";
      $contextMenu.classList.add("show");
      $target.classList.add("active");
    },
    resetContextMenu(){
      const $otherMenus = document.querySelectorAll(".context-menu");
      const $otherItems = document.querySelectorAll(".download-links-list--item");

      $otherMenus.forEach(($omenu) => {
        $omenu.classList.remove("show");
      });

      $otherItems.forEach( $oitem => {
        $oitem.classList.remove("active");
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.download-links {
  margin-top: calc(var(--common-padding) * 2);
  position: relative;
  padding-bottom: 3rem;

  &-list {
    &,
    &--wrapper {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    &:first-of-type {
      .download-links-list--item {
        &:first-of-type {
          margin-top: 0;
        }
      }
    }

    &--wrapper {
      position: relative;
      border-radius: var(--common-radius);
      border: 1px solid var(--true-gray-color);
      padding-left: calc(var(--common-padding) * 1.5);
      padding-bottom: calc(var(--common-padding) * 1.5);
      padding-right: 1.5rem;
      background-color: var(--true-light-gray-color);
      color: var(--dark-color);
      max-height: 2.5rem;
      overflow: hidden;
      float: left;

      &::after {
        top: 1.1rem;
        right: var(--common-padding);
        border: solid transparent;
        content: "";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        border-color: rgba(0, 0, 0, 0);
        border-top-color: var(--dark-color);
        border-width: 5px;
        margin-left: -5px;
      }

      &.show {
        overflow: initial;
        max-height: 100%;
        z-index: 100;

        &::after {
          top: 0.75rem;
          border: solid transparent;
          content: "";
          border-bottom-color: var(--dark-color);
          border-width: 5px;
        }
      }
    }

    &--header {
      font-weight: normal;
      font-size: 0.95rem;
      padding: var(--common-padding);
      padding-left: 0;
      cursor: pointer;
    }

    &--item {
      margin-left: var(--common-padding);
      padding-left: var(--common-padding);
      font-size: 14px;

      &.active, &:hover {
        border-radius: var(--common-radius);
        background-color: var(--dark-color);
        color: var(--light-color);
      }
    }

    li {
      cursor: pointer;

      &[disabled] {
        font-weight: bold;
        cursor: initial;
        margin-left: 0;
        padding-left: 0;
        margin-top: 1rem;
        font-style: italic;
        font-size: 1rem;

        &:hover {
          background-color: initial;
          color: var(--dark-color);
        }
      }
    }
  }

  .context-menu {
    border-radius: var(--common-radius);
    padding: var(--common-padding);
    background-color: var(--true-light-gray-color);
    color: var(--dark-color);
    border: 1px solid var(--true-gray-color);
    display: none;
    pointer-events: none;
    margin: 0;
    list-style: none;

    &::before,
    &::after {
      right: 100%;
      top: 12px;
      border: solid transparent;
      content: "";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      z-index: 10;
    }

    &::after {
      border-color: rgba(136, 183, 213, 0);
      border-right-color: var(--true-light-gray-color);
      border-width: 10px;
      margin-top: -10px;
    }

    &::before {
      border-color: rgba(0, 0, 0, 0);
      border-right-color: var(--dark-color);
      border-width: 11px;
      margin-top: -11px;
    }

    &--option {
      cursor: pointer;
      padding-left: var(--common-padding);
      padding-right: var(--common-padding);
      font-size: 14px;
      // font-size: 0.85rem;
      // font-weight: bold;

      &:hover {
        border-radius: var(--common-radius);
        background-color: var(--dark-color);
        color: var(--light-color);
      }
    }

    &.show {
      position: absolute;
      display: block;
      pointer-events: initial;
      z-index: 1000;
    }
  }
}
</style>
