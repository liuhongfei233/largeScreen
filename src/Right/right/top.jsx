import React, { useContext } from "react";
import TitleBox from "../../components/titleBox";
import ScrollTable from "@/components/scrollTable";
import { GlobalContext } from "@/components/globalContext";
import "../index.scss";

const Index = () => {
  const { state } = useContext(GlobalContext);
  const alarms = state?.alarms || [];
  return (
    <div className="right_content_right_top">
      <TitleBox
        title="预警数据"
        icon={
          <img
            width={52}
            height={52}
            style={{ marginLeft: 30 }}
            src={require("@/assets/warning.png")}
            alt=""
          />
        }
      ></TitleBox>
      <div style={{ height: 760 }}>
        <ScrollTable dataSource={alarms} />
      </div>
    </div>
  );
};
export default Index;
