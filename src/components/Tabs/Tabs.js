import React, { useState } from "react";
import AddEntity from "../AddEntity/AddEntity";
import AddRelationship from "../AddRelationship/AddRelationship";
import TabNavItem from "../TabNavItem/TabNavItem";
import TabContent from "../TabContent/TabContent";
import "./tabs.css";
import ViewRelation from "../ViewRelation/ViewRelation";

const Body = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="Tabs">
      <ul className="nav">
        <TabNavItem
          title="ADD USER"
          id="tab1"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="ADD RELATION"
          id="tab2"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="VIEW RELATION"
          id="tab3"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>
      <div className="outlet">
        <TabContent id="tab1" activeTab={activeTab}>
          <AddEntity />
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <AddRelationship />
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <ViewRelation />
        </TabContent>
      </div>
    </div>
  );
};

export default Body;
