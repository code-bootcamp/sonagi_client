import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

export default function ToastUi(props) {
  // useRef

  return (
    <Editor
      onChange={props.onChangeDescription}
      previewStyle="vertical"
      height="400px"
      initialEditType="markdown"
      useCommandShortcut={true}
      ref={props.editorRef}
      initialValue={props.initialValue}
      toolbarItems={[
        ["heading", "bold", "strike"],
        ["hr", "quote"],
      ]}
    />
  );
}
