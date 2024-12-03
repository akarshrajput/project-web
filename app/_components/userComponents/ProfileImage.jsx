import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ProfileImage({ src = "" }) {
  return (
    <div>
      <Avatar className="size-9">
        <AvatarImage src={src} alt="@shadcn" />
        <AvatarFallback>USER</AvatarFallback>
      </Avatar>
    </div>
  );
}
