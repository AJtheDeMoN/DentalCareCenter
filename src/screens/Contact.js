import {
    Card,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
   
  export default function SimpleCard() {
    return (
        <div className="flex justify-center items-center h-screen mx-2">
          <Card className="w-100 bg-blue-50">
            <CardBody>
              <Typography variant="h5" color="black" className="mb-4 text-2xl">
                Randhawa Dental Clinic Center
              </Typography>
              <Typography className="text-black">
                <p class="text-lg text-black">Dr. Jaswinder Singh Randhawa (BDS)</p>
                <span class="font-bold text-black">Contact Number:</span> <span>+91-73472-98551</span> <br/>
                <span class="font-bold">Address:</span> <span>Dera Baba Nanak near Malhi Market</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="ml-4">Batala, Punjab, India</span>
            </Typography>

            </CardBody>
          </Card>
        </div>
      );
  }