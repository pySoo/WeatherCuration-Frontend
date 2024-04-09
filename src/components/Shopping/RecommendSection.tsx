import SectionBorder from '../Common/SectionBorder';
import ClothesRecommend from './ClothesRecommend';
import CosmeticRecommend from './CosmeticRecommend';

export default function RecommendSection() {
  return (
    <>
      <ClothesRecommend />
      <SectionBorder />
      <CosmeticRecommend />
    </>
  );
}
