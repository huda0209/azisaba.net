import React from 'react';
import { Link } from 'gatsby';

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import SEO from '@rocketseat/gatsby-theme-docs/src/components/SEO';

export default function NotFound() {
  return (
    <Layout title="ページが見つかりません！">
      <SEO title="404: Not found" />
      <p>うーん…何かが足りなかった。</p>
      <p>
        サイドバーに目的のものがない場合は <Link to="/">ホーム</Link> に戻りませんか？
      </p>
    </Layout>
  );
}
