import { Box } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import CardNumberInput from "./CardNumberInput";
import OneCardInput from "./OneCardInput";
import Buttons from "../Buttons";
import Icon from "../Icon";
import { Crimson_Text } from '@next/font/google';

const crimsonText = Crimson_Text({ subsets: ['latin'], weight: ['400', '600', '700'] });


const CardInputField = () => {
  const [isChecked, setIsChecked] = useState(false)
  const [cvv, setCVV] = useState<number>()
  const [cardHolderName, setCardHolderName] = useState<string>()
  const [dateValue, setDateValue] = useState<Date>(new Date())
  const [open, setOpen] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  const checkboxStyle = {
    width: "18px",
    height: "18px",
    borderRadius: "50%",
    border: isChecked ? '#9A9A9B' : "1px solid #D9D9D9",
    backgroundColor: isChecked ? "#860ECF" : "transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  }

  const tickIconStyle = {
    display: isChecked ? "block" : "none",
    color: "white",
    fontSize: "12px",
    fontWeight: "bold",
  }

  // CardNumber Logic
  const [cardNumber, setCardNumber] = useState("")
  const [cardType, setCardType] = useState("")

  const determineCardType = (number: any) => {
    if (number.startsWith("4")) {
      return "Visa"
    }
    if (number.startsWith("5")) {
      return "MasterCard"
    }
    return ""
  }

  const handleCardNumberChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const number = e.target.value
    if (number.length <= 16 && /^\d*$/.test(number)) {
      setCardNumber(number)
      setCardType(determineCardType(number))
    }
  }

  const getCardIcon = () => {
    switch (cardType) {
      case "Visa":
        return "logos:visaelectron"
      case "MasterCard":
        return "logos:mastercard"
      default:
        return "ion:card-outline"
    }
  }

  const onAddingCardDetails = () => {
    if (cvv && cardHolderName && cardNumber) {
      toast.success("Good")
    } else {
      // Show error toast only if the condition is not met
      toast.error("Please fill in all required fields")
    }
  }

  return (
    <div className="mx-auto w-full md:px-5]">
      <>
        <p className={` ${crimsonText.className} font16SB text-start text-black_101`} style={{fontWeight:700}}>Card Details</p>
        <div className="mb-7  mt-2 h-[1px] w-full bg-grey_103"></div>
      </>

      <div className="flex flex-col gap-6 md:py-2">
        <div>
          <CardNumberInput
            cardNumber={cardNumber}
            handleCardNumberChange={handleCardNumberChange}
            getCardIcon={getCardIcon}
            type="number"
          />
        </div>
        <div className="flex w-full gap-[17px] md:gap-[22px] ">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Expiry date"
              openTo="month"
              format={"MM/YYYY"}
              views={["month", "year"]}
              value={dayjs(dateValue)}
              onClose={() => setOpen(false)}
              onChange={(newValue: any) => {
                setDateValue(newValue)
              }}
              open={open}
              slotProps={{
                textField: {
                  sx: {
                    "& .MuiFormLabel-root.MuiInputLabel-root": {
                      color: "black !important",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#44444F",
                        borderWidth: "1px !important",
                        borderRadius: "5px !important",
                      },
                      "&:hover fieldset": {
                        borderColor: "#44444F",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#44444F",
                      },
                    },
                    "& input": {
                      color: "#757575 !important",
                      fontSize: 14,
                      fontWeight: "400",
                      p: "15px",
                      cursor: "pointer",
                    },
                  },
                  size: "small",
                  onClick: () => setOpen(true),
                  InputProps: {
                    endAdornment: (
                      <Box
                        onClick={() => setOpen(true)}
                        sx={{ "&:hover": { cursor: "pointer" } }}
                      >
                        <Icon
                          icon="lucide:calendar"
                          className="text-black_101 w-[22px] h-[22px]"
                        />
                      </Box>
                    ),
                  },
                },
              }}
            />
          </LocalizationProvider>

          <OneCardInput
            label="CVV/CVC"
            placeholder="•••"
            icon={true}
            iconString="carbon:locked"
            type="text"
            value={cvv}
            setValue={(e) => {
              const inputVal = e.target.value;
              if (/^\d{0,3}$/.test(inputVal)) {
                setCVV(inputVal);
              }
            }}
          />
        </div>
        <div className="w-full">
          <OneCardInput
            label="Cardholder name"
            placeholder="Enter cardholder’s full name"
            icon={false}
            type="text"
            value={cardHolderName}
            setValue={(e) => {
              let value = e.target.value
              value = value.replace(/[^A-Za-z]/gi, "")
              setCardHolderName(value)
            }}
            // setValue={(e) => setCardHolderName(e.target.value)}
          />
        </div>
      </div>

      <div
        className="mb-5 mt-[15px] flex gap-2.5 items-center"
        onClick={handleCheckboxChange}
      >
        <div style={checkboxStyle} onClick={handleCheckboxChange}>
          <span style={tickIconStyle}>✓</span>
        </div>
        <p className="normalText  text-black_101">
          Save card <span className="font10R text-GRAY_101">(optional)</span>
        </p>
      </div>

      <Buttons
        buttonText="Pay now : Ksh 3,788"
        onClick={onAddingCardDetails}
        className="w-full text-white_101  bg-black_101"
      />
    </div>
  )
}

export default CardInputField