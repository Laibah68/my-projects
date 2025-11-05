import PropertyHeader from '../components/PropertyHeader';
import { PropertyCard } from '../components/Card';

const dummyData = [
  {
    name: 'Keller Williams Elite Town Center',
    unit: '24-floor unit',
    address: '2964 Joseph Ln, Las Vegas, Nevada 43423',
    year: 2017,
    price: '$1,200,000',
  },
  {
    name: 'FIT Realty',
    unit: '24-floor unit',
    address: '647 Washington Ave, Frankfort, Kentucky 40601',
    year: 2019,
    price: '$1,200,000',
  },
  {
    name: 'All Pros Real Estate',
    unit: '24-floor unit',
    address: '2716 40th Ave, Sioux Falls, South Dakota 57103',
    year: 2019,
    price: '$1,200,000',
  },
  {
    name: 'Beach Pros Realty Inc.',
    unit: '24-floor unit',
    address: '3077 Washington Ave, Frankfort, Kentucky 40601',
    year: 2019,
    price: '$1,200,000',
  },
  {
    name: 'All Pros Real Estate',
    unit: '24-floor unit',
    address: '2716 40th Ave, Sioux Falls, South Dakota 57103',
    year: 2019,
    price: '$1,200,000',
  },
  {
    name: 'All Pros Real Estate',
    unit: '24-floor unit',
    address: '2716 40th Ave, Sioux Falls, South Dakota 57103',
    year: 2019,
    price: '$1,200,000',
  },
  {
    name: 'Exit Realty',
    unit: '24-floor unit',
    address: '3077 Washington Ave, Frankfort, Kentucky 40601',
    year: 2019,
    price: '$1,200,000',
  },
  {
    name: 'Beach Pros Realty Inc.',
    unit: '24-floor unit',
    address: '3077 Washington Ave, Frankfort, Kentucky 40601',
    year: 2019,
    price: '$1,200,000',
  },
  {
    name: 'All Pros Real Estate',
    unit: '24-floor unit',
    address: '2716 40th Ave, Sioux Falls, South Dakota 57103',
    year: 2019,
    price: '$1,200,000',
  },
  {
    name: 'FIT Realty',
    unit: '24-floor unit',
    address: '647 Washington Ave, Frankfort, Kentucky 40601',
    year: 2019,
    price: '$1,200,000',
  },
  {
    name: 'FIT Realty',
    unit: '24-floor unit',
    address: '647 Washington Ave, Frankfort, Kentucky 40601',
    year: 2019,
    price: '$1,200,000',
  },
  {
    name: 'Bold Realty',
    unit: '24-floor unit',
    address: '3077 Gary St, Richmond, Kentucky 40475',
    year: 2019,
    price: '$1,200,000',
  },
  {
    name: 'Bold Realty',
    unit: '24-floor unit',
    address: '3077 Gary St, Richmond, Kentucky 40475',
    year: 2019,
    price: '$1,200,000',
  },
  {
    name: 'Bold Realty',
    unit: '24-floor unit',
    address: '3077 Gary St, Richmond, Kentucky 40475',
    year: 2019,
    price: '$1,200,000',
  },
  {
    name: 'Keller Williams Elite Town Center',
    unit: '24-floor unit',
    address: '2964 Joseph Ln, Las Vegas, Nevada 43423',
    year: 2017,
    price: '$1,200,000',
  },
];

export default function Properties() {
  return (
    <div className="space-y-2">
      <PropertyHeader />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {dummyData.map((item, idx) => (
          <PropertyCard
            key={idx}
            name={item.name}
            unit={item.unit}
            address={item.address}
            year={item.year}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}
