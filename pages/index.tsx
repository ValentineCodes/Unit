import React from "react";
import Benefits from "../components/pages/home/Benefits";
import HomeBanner from "../components/pages/home/HomeBanner";
import PageLayout from "../components/layouts/PageLayout";

type Props = {};

function index({}: Props) {
  return (
    <PageLayout title="UNIZIK Hoster Management Portal">
      <HomeBanner />
      <Benefits />
    </PageLayout>
  );
}

export default index;
