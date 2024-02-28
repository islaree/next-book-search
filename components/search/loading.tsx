import ContentLoader from 'react-content-loader'

export default function ProductDetails() {
  return (
    <div className="w-full overflow-hidden">
      <ContentLoader viewBox="0 0 1300 500" height={500} width={1300}>
        <rect x="16" y="16" rx="4" ry="4" width="80" height="112" />
        <rect x="112" y="16" rx="2" ry="2" width="20" height="16" />
        <rect x="112" y="36" rx="2" ry="2" width="160" height="20" />
        <rect x="112" y="64" rx="2" ry="2" width="247" height="16" />
        <rect x="112" y="84" rx="2" ry="2" width="247" height="16" />
        <rect x="0" y="144" rx="0" ry="0" width="375" height="1" />

        <rect x="16" y="160" rx="4" ry="4" width="80" height="112" />
        <rect x="112" y="160" rx="2" ry="2" width="20" height="16" />
        <rect x="112" y="180" rx="2" ry="2" width="160" height="20" />
        <rect x="112" y="208" rx="2" ry="2" width="247" height="16" />
        <rect x="112" y="228" rx="2" ry="2" width="247" height="16" />
        <rect x="0" y="288" rx="0" ry="0" width="375" height="1" />

        <rect x="16" y="304" rx="4" ry="4" width="80" height="112" />
        <rect x="112" y="304" rx="2" ry="2" width="20" height="16" />
        <rect x="112" y="324" rx="2" ry="2" width="160" height="20" />
        <rect x="112" y="352" rx="2" ry="2" width="247" height="16" />
        <rect x="112" y="372" rx="2" ry="2" width="247" height="16" />
        <rect x="0" y="432" rx="0" ry="0" width="375" height="1" />
      </ContentLoader>
    </div>
  )
}
