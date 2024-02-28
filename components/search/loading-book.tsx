import ContentLoader from 'react-content-loader'

export default function BookContent() {
  return (
    <div className="w-full overflow-hidden">
      <ContentLoader viewBox="0 0 1000 500" height={500} width={1000}>
        <rect x="0" y="0" rx="0" ry="0" width="100%" height="225" />
        <rect x="24" y="257" rx="4" ry="4" width="200" height="28" />
      </ContentLoader>
    </div>
  )
}
