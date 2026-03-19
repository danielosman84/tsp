import BrandPageTemplate from '../components/BrandPageTemplate';
import { brandPages } from '../data/vehicleHireContent';

export default function CompassSelfDrivePage() {
  return <BrandPageTemplate page={brandPages['compass-self-drive']} />;
}
