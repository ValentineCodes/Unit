import React from "react";
import Benefits from "./modules/Benefits";
import HomeBanner from "./modules/HomeBanner";
import PageLayout from "./modules/PageLayout";

type Props = {};

function index({}: Props) {
  return (
    <div>
      <PageLayout title="UNIZIK Hoster Management Portal">
        <HomeBanner />
        <Benefits />
      </PageLayout>
    </div>
  );
}

export default index;
