import BrandPageTemplate from '../components/BrandPageTemplate';
import { brandPages } from '../data/vehicleHireContent';

export default function AmHirePage() {
  return <BrandPageTemplate page={brandPages['am-hire']} />;
}
