import AlertInterface from "@/utils/interfaces/AlertInterface";

export default function Alert({message, type}: AlertInterface){
    return (
        <div className={
            `fixed top-5 right-5 px-6 py-3 rounded-lg shadow-lg text-white 
            font-semibold transition-opacity duration-300 ${type === "success" ? "bg-green-500" : "bg-red-500"}`
            }>
          {message}
        </div>
      );
}