import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
} from "@mantine/core";
import { useForm } from "react-hook-form";

export default function GetInTouchSimple() {
  return (
    <form style={{ width: "90%", margin: "auto" }}>
      <Title
        order={2}
        size="h3"
        sx={(theme) => ({ fontFamily: `cairo, ${theme.fontFamily}` })}
        weight={200}
        align="center"
        mt={20}
        mb={10}
      >
        تواصل معنا! رأيك يطورنا
      </Title>

      <SimpleGrid cols={2} mt="md" breakpoints={[{ maxWidth: "xs", cols: 1 }]}>
        <TextInput
          label="الاسم"
          placeholder="الاسم من مقطعين"
          name="Name"
          variant="filled"
        />
        <TextInput
          label="البريد الإلكتروني"
          placeholder=" ex : aaa@bbb.com "
          name="Email"
          variant="filled"
        />
      </SimpleGrid>

      <TextInput
        label="الموضوع"
        placeholder="موضوع الرسالة"
        mt="md"
        name="Subject"
        variant="filled"
      />
      <Textarea
        mt="md"
        label="الرسالة"
        placeholder="اكتب رسالتك هنا"
        maxRows={10}
        minRows={5}
        autosize
        name="Message"
        variant="filled"
      />

      <Group position="center" mt="xl">
        <Button
          type="submit"
          size="md"
          style={{ background: "rgba(164, 212, 155, 1)" }}
        >
          أرسل رسالة
        </Button>
      </Group>
    </form>
  );
}
