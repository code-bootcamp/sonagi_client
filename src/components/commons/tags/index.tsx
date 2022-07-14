import { PlusOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Input, Tag, Tooltip } from "antd";
import { useEffect, useRef, useState } from "react";

const Inputs = styled(Input)`
  width: 200px;
  border-radius: 10px;
`;

export default function Tags(props) {
  // const [tags, setTags] = useState([""]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [editInputIndex, setEditInputIndex] = useState(-1);
  const [editInputValue, setEditInputValue] = useState("");
  const inputRef = useRef(null);
  const editInputRef = useRef(null);
  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);
  useEffect(() => {
    editInputRef.current?.focus();
  }, [inputValue]);

  const handleClose = (removedTag: string) => {
    const newTags = props.tags.filter((tag) => tag !== removedTag);
    props.setTags(newTags);
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && props.tags.indexOf(inputValue) === -1) {
      props.setTags([...props.tags, inputValue]);
    }

    setInputVisible(false);
    setInputValue("");
  };

  const handleEditInputChange = (e) => {
    setEditInputValue(e.target.value);
  };

  const handleEditInputConfirm = () => {
    const newTags = [...props.tags];
    newTags[editInputIndex] = editInputValue;
    props.setTags(newTags);
    setEditInputIndex(-1);
    setInputValue("");
  };

  return (
    <>
      {props.tags.map((tag, index) => {
        if (editInputIndex === index) {
          return (
            <Inputs
              ref={editInputRef}
              key={tag}
              size="small"
              className="tag-input"
              value={editInputValue}
              onChange={handleEditInputChange}
              onBlur={handleEditInputConfirm}
              onPressEnter={handleEditInputConfirm}
            />
          );
        }

        const isLongTag = tag.length > 20;
        const tagElem = (
          <Tag
            style={{
              backgroundColor: "#2277D8",
              borderRadius: 8,
              color: "white",
              padding: "6px 13px",
              margin: "0 10px",
            }}
            className="edit-tag"
            key={tag}
            closable={index !== 0}
            onClose={() => handleClose(tag)}
          >
            <span
              onDoubleClick={(e) => {
                if (index !== 0) {
                  setEditInputIndex(index);
                  setEditInputValue(tag);
                  e.preventDefault();
                }
              }}
            >
              {isLongTag ? `${tag.slice(0, 20)}...` : tag}
            </span>
          </Tag>
        );
        return isLongTag ? (
          <Tooltip title={tag} key={tag}>
            {tagElem}
          </Tooltip>
        ) : (
          tagElem
        );
      })}
      {inputVisible && (
        <Inputs
          ref={inputRef}
          type="text"
          size="small"
          className="tag-input"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      )}
      {!inputVisible && (
        <Tag
          className="site-tag-plus"
          onClick={showInput}
          style={{
            backgroundColor: "gray",
            borderRadius: 10,
            color: "white",
            padding: "6px 13px",
            margin: "0 10px",
          }}
        >
          <PlusOutlined /> 태그
        </Tag>
      )}
    </>
  );
}
