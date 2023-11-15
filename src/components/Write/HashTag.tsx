import React, { useState } from "react";
import { HashTagInner, HashTagWrap } from "../../styles/HashTagStyle";

const HashTag = () => {
  const [hashTag, setHashTag] = useState<string>("");
  const [hashSave, setHashSave] = useState<string[]>([]);

  const isEmptyValue = (value: string): boolean => value.trim().length === 0;

  const addHashTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const command = ["Comma", "Enter", "Space", "NumpadEnter"];
    if (!command.includes(e.code)) return;

    if (isEmptyValue((e.target as HTMLInputElement).value)) {
      setHashTag("" as string);
      return;
    }

    let newHashTag = (e.target as HTMLInputElement).value.trim();
    const regExp = /[{}[\].;:|)*~`!^_+<>@#$%&\\=('"]/g;
    if (regExp.test(newHashTag)) {
      newHashTag = newHashTag.replace(regExp, "");
    }

    if (newHashTag.includes(",")) {
      newHashTag = newHashTag.split(",").join("");
    }

    if (isEmptyValue(newHashTag)) return;

    if (hashSave.length >= 6) {
      setHashTag("");
      return;
    }

    if (!hashSave.includes(newHashTag)) {
      setHashSave((prevHashTags: string[]) => [...prevHashTags, newHashTag]);
    }
    setHashTag("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code !== "Enter" && e.code !== "NumpadEnter") return;
    e.preventDefault();

    const regExp = /^[a-z|A-Z|가-힣|ㄱ-ㅎ|ㅏ-ㅣ|0-9| \t|]+$/g;
    if (!regExp.test(e.currentTarget.value)) {
      setHashTag("");
    }
  };

  const handleHashChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHashTag(e.target.value);
  };

  const removeHashTag = (clickHashTag: string) => {
    console.log("삭제:", clickHashTag);
    const updatedHashTags = hashSave.filter(tag => tag !== clickHashTag);
    console.log("배열에서 사라졌니?", updatedHashTags);
    setHashSave(updatedHashTags);
  };

  return (
    <HashTagWrap>
      <HashTagInner>
        {hashSave.length > 0 &&
          hashSave.map(hashTag => {
            return (
              <div
                className="tags"
                key={hashTag}
                onClick={() => {
                  removeHashTag(hashTag);
                }}
              >
                #{hashTag}
              </div>
            );
          })}
        <input
          type="text"
          id="hash-input"
          name="hash-tag"
          value={hashTag}
          onChange={handleHashChange}
          onKeyUp={addHashTag}
          onKeyDown={handleKeyDown}
          placeholder="#해시태그를 입력하여주세요.(최대 6개)"
        />
      </HashTagInner>
    </HashTagWrap>
  );
};

export default HashTag;
