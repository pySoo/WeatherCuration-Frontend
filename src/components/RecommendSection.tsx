import SectionBorder from './Common/SectionBorder';
import ClothesRecommend from './Shopping/ClothesRecommend';
import CosmeRecommend from './Shopping/CosmeRecommend';

export default function RecommendSection() {
  return (
    <>
      <ClothesRecommend />
      <SectionBorder />
      <CosmeRecommend />
    </>
  );
}
