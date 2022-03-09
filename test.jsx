import Top02 from "components/Top/Top02";
import FixedBottomCTA from "components/FixedBottomCTA";
import BigText from "components/BigText";
import BigInput from "components/BigInput";

import { css } from "@emotion/react";
import { useInternalRouter } from "./routing";
import colors from "constants/colors";
import { ComponentProps, useEffect, useState } from "react";

type NumsCountObj = {
  [key: string]: number,
};

export const RRNCheckPage = () => {
  const { push } = useInternalRouter();
  const frontNums = "840218";

  const [isCorrect, setIsCorrect] = useState(false);

  const [backNums, setBackNums] = useState("");

  useEffect(() => {
    return () => setBackNums("");
  }, []);

  const checkNumber = (backNums: string) => {
    if (backNums.length !== 7) {
      setIsCorrect(false);
      return;
    }

    const lastNum = Number(backNums[backNums.length - 1]);
    const newBackNums = backNums.slice(0, -1);

    const numsCount: NumsCountObj = { 0: 0 };

    let maxNum = 0;
    for (const num of frontNums) {
      numsCount[num] = numsCount[num] ? numsCount[num] + 1 : 1;
      if (numsCount[num] > numsCount[maxNum]) {
        maxNum = Number(num);
      }
    }

    for (const num of newBackNums) {
      numsCount[num] = numsCount[num] ? numsCount[num] + 1 : 1;
    }

    for (const num in numsCount) {
      if (numsCount[num] > numsCount[maxNum]) {
        maxNum = Number(num);
      }
    }

    if (maxNum === lastNum) {
      setIsCorrect(true);
    } else if (maxNum !== lastNum) {
      setIsCorrect(false);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 7) {
      return;
    }
    setBackNums(e.target.value);
    checkNumber(e.target.value);
  };

  return (
    <>
      <Top02>주민등록번호를 확인할게요</Top02>
      <div
        css={css`
          padding: 24px 24px 0;
          display: flex;
        `}
      >
        <BigText
          css={css`
            color: ${colors.grey800};
          `}
        >
          {frontNums} -
        </BigText>
        <RRNBackInput
          type="text"
          onChange={onChange}
          value={backNums}
          css={css`
            width: 140px;
            margin-left: 0.3em;
          `}
        />
      </div>
      <FixedBottomCTA disabled={!isCorrect} onClick={() => push("/limit-check")}>
        다음
      </FixedBottomCTA>
    </>
  );
};

const RRNBackInput = (props: ComponentProps<typeof BigInput>) => (
  <BigInput {...props} data-testid="rrnBackInput" />
);
