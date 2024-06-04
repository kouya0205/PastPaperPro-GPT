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
import { useState } from 'react';
import { supabase } from '../../../../../utils/supabase/supabase';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const { error: signUpError } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          emailRedirectTo: `${location.origin}/auth/callback`,
        },
      });
      if (signUpError) {
        throw signUpError;
      }
      alert('登録完了メールを確認してください');
    } catch (error) {
      alert('エラーが発生しました');
      console.error(error);
    }
  };

  return (
    <form className={classes.wrapper} onSubmit={onSubmit}>
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
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordInput
          label="パスワード"
          placeholder="Your password"
          mt="md"
          size="md"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Text ta="right" mt="sm">
          <Anchor component={Link} href="/auth/forgot-password">
            パスワードを忘れた場合
          </Anchor>
        </Text>
        <Button fullWidth mt="xl" size="md" type="submit">
          ログイン
        </Button>

        <Text ta="center" mt="md">
          アカウントを作成しますか？{' '}
          <Anchor component={Link} href="/auth/signup">
            新規登録
          </Anchor>
        </Text>
      </Paper>
    </form>
  );
}
