import { usePathname } from "expo-router";
import { View, Text, Image } from "react-native";

const PropertyDetails = () => {
  const pathname = usePathname();
  const fullAddress = decodeURI(pathname).split("/")[2];
  const [address, city, state, zip] = fullAddress.split("-");
  return (
    <View>
      <Text>Property Details</Text>
      <Text>Address: {address}</Text>
      <Text>City: {city}</Text>
      <Text>State: {state}</Text>
      <Text>Zip: {zip}</Text>
      <Image source={require("../../assets/images/1165fromagecire.png")} />

      <View>
        <Text>General</Text>
        <Text>Purchase price</Text>
        <Text>Down Payment (25%)</Text>
        <Text>Loan Amount</Text>
        <Text>Interest Rate</Text>
        <Text>Closing Costs (2.58%)</Text>
        <Text>Rehab Costs</Text>
        <Text>Equity Required (down payment + closing costs)</Text>
        <Text>1% Rule</Text>
        <Text>Assessed Value</Text>
        <Text>Mortgage Per Month</Text>
      </View>

      <View>
        <Text>Income</Text>
        <Text>Monthy Rent</Text>
        <Text>Monthy Rent after vacancy</Text>
        <Text>Yearly Rent</Text>
        <Text>Yearly Rent after Vacancy 8.3%</Text>
        <Text>Effective gross income</Text>
        <Text>Net Operating Income</Text>
        <Text>Net Cash Flow</Text>
      </View>
      <View>
        <Text>Operating Expenses</Text>
        <Text>Property Taxes 1.1%</Text>
        <Text>Property Management</Text>
        <Text>Monthly Insurance</Text>
        <Text>Monthly Repair Budget</Text>
        <Text>Monthly CapEx</Text>
        <Text>HOA</Text>
        <Text>Total Monthly Opp Exp</Text>
        <Text>Total Yearly Opp Exp</Text>
      </View>
      <View>
        <Text>Cap Rate</Text>
        <Text>Cash on Cash Return</Text>
      </View>
    </View>
  );
};

export default PropertyDetails;
