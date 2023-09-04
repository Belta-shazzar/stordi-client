<template>
  <div>
    <textarea ref="editor"></textarea>
  </div>
</template>

<script>
import tinymce from "tinymce";

export default {
  props: {
    value: String,
  },
  mounted() {
    // Initialize TinyMCE
    tinymce.init({
      target: this.$refs.editor,
      setup: (editor) => {
        editor.on("change", () => {
          const content = editor.getContent();
          this.$emit("input", content);
        });
      },
    });
  },
  watch: {
    value(newContent) {
      if (this.editor) {
        this.editor.setContent(newContent);
      }
    },
  },
  beforeDestroy() {
    if (this.editor) {
      this.editor.destroy();
    }
  },
};
</script>
