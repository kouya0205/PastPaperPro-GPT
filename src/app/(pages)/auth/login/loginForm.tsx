'use client';

import {
  Paper,
  TextInput,
  PasswordInput,
  Button,
  Title,
  Text,
  Anchor,
  Group,
  Divider,
} from '@mantine/core';
import classes from './loginForm.module.css';
import { GoogleButton } from '@/app/components/ui/button/auth/GoogleButton';
import { TwitterButton } from '@/app/components/ui/button/auth/TwitterButton';
import Link from 'next/link';

export function LoginForm() {
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          おかえりなさい！
        </Title>
        <Group grow mb="md" mt="md">
          <GoogleButton radius="xl">Google</GoogleButton>
          <TwitterButton radius="xl">Twitter</TwitterButton>
        </Group>

        <Divider
          label="またはメールアドレスでログイン"
          labelPosition="center"
          my="lg"
        />

        <TextInput
          label="メールアドレス"
          placeholder="user@email.com"
          size="md"
        />
        <PasswordInput
          label="パスワード"
          placeholder="Your password"
          mt="md"
          size="md"
        />
        <Text ta="right" mt="sm">
          <Anchor component={Link} href="/auth/forgot-password">
            パスワードを忘れた場合
          </Anchor>
        </Text>
        <Button fullWidth mt="xl" size="md">
          ログイン
        </Button>

        <Text ta="center" mt="md">
          アカウントを作成しますか？{' '}
          <Anchor component={Link} href="/auth/signup">
            新規登録
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
}
