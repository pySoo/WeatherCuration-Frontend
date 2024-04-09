import SectionBorder from '../Common/SectionBorder';
import ClothesRecommend from './ClothesRecommend';
import CosmeRecommend from './CosmeRecommend';

export default function RecommendSection() {
  return (
    <>
      <ClothesRecommend />
      <SectionBorder />
      <CosmeRecommend />
    </>
  );
}
