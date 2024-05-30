import AboutStoreSummary from "@/components/commonComponents/AboutStoreSummary";
import Buttons from "@/components/commonComponents/Buttons";
import CategoryHeader from "@/components/commonComponents/CategoryHeader";
import CustomerReviewSummary from "@/components/commonComponents/CustomerReviewSummary";
import ProductTags from "@/components/commonComponents/ProductTags";
import SingleReview from "@/components/commonComponents/ClientReview";
import NavBar from "@/components/NavBar";
import TopBar from "@/components/TopBar";
import LandingPage from "@/components/LandingPage/LandingPage";

export default function Home() {
  return (
<div>
  <LandingPage />
 {/* <Buttons buttonText="SHOP NOW" rounded={false} className="w-[200px] md:w-[150px] bg-purple_01"  />
 <CategoryHeader headingLeft="FOR YOU" icon='/assets/icons/yeey.svg' rightIcon={true} headingRight="SEE ALL" />
 <ProductTags tagName='Kendy Thrift Store' tagIcon='/assets/icons/yeey.svg' />
 <AboutStoreSummary name="KENDY THRIFT STORE" rating="4.8" followers="102K" items="300K" logo="" />
 <CustomerReviewSummary />
 <SingleReview /> */}
</div>
  );
}
