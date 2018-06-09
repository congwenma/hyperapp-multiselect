import { h } from "hyperapp";

const initialState = {
  value: "",
  isDraggingOver: false,
  mainElement: null
};

const actions = {
  onUpdateFile: newPath => oldState => {
    return Object.assign({}, oldState, { value: newPath });
  },
  onDrop: event => oldState => {
    event.preventDefault();
    const { files } = event.dataTransfer;
    let filePath = "";
    if (files) {
      [{ name: filePath }] = files;
    }
    return Object.assign({}, actions.onUpdateFile(filePath)(oldState), {
      isDraggingOver: false
    });
  },
  onDragOver: event => oldState => {
    event.preventDefault();

    return Object.assign({}, oldState, {
      isDraggingOver: true
    });
  },
  onDragLeave: event => oldState => {
    event.preventDefault();

    return Object.assign({}, oldState, {
      isDraggingOver: false
    });
  },
  onChangeFile: event => oldState => {
    const { files } = event.target;
    let filePath = "";
    if (files) {
      [{ name: filePath } = {}] = files; // default {} in case remove file
    }
    return actions.onUpdateFile(filePath)(oldState);
  }
};

const FileDroparea = ({
  state,
  actions,
  style,
  class: className,
  phasingClass
}) => {
  const { value, isDraggingOver } = state;
  const {
    onUpdateFile,
    onDrop,
    onDragOver,
    onDragLeave,
    onChangeFile
  } = actions;
  return (
    <div
      class={`FileDroparea ${className}
        ${isDraggingOver ? phasingClass : ""}
        ${isDraggingOver ? "FileDroparea--isDraggingOver" : ""}
        ${value ? "FileDroparea--hasFile" : ""}
      `}
      oncreate={element => (state.mainElement = element)}
      ondrop={onDrop}
      ondragover={onDragOver}
      ondragleave={onDragLeave}
      onclick={event => {
        state.mainElement.querySelector("input[type=file]").click();
      }}
      style={Object.assign(
        {
          transition: "0.2s",
          border: "1px dashed #7c7bd3"
        },
        style
      )}
    >
      <button class="FileDroparea-description">CHOOSE FILES</button>
      <span class="FileDroparea-filePath">
        {value || "or drag the file here"}
      </span>
      <input
        class="FileDroparea-fileupload"
        type="file"
        style={{ display: "none" }}
        onclick={e => {
          e.stopPropagation();
          onUpdateFile("");
        }}
        onchange={onChangeFile}
      />
    </div>
  );
};

FileDroparea.initialState = initialState;
FileDroparea.actions = actions;

export default FileDroparea;
