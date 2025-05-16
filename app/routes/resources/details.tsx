import type { Route } from "./+types/details";
import db from "./db.json";

enum ResourceType {
  PDF = "pdf",
  Podcast = "podcast",
  Article = "article",
  Video = "video",
}

enum PodcastProvider {
  Spotify = "spotify",
  Apple = "apple",
  File = "file",
}

enum VideoProvider {
    Youtube = 'youtube',
    File = 'file'
}

type Resource = {
  id: string;
  name: string;
  tags: string[];
  sources: Source[];
};

type PDFResource = {
  type: ResourceType.PDF;
  url: string;
};

type PodcastResource = {
  type: ResourceType.Podcast;
  provider: PodcastProvider;
  url: string;
};

type ArticleResource = {
  type: ResourceType.Article;
};

type VideoResource = {
  type: ResourceType.Video;
  provider: VideoProvider;
  url: string;
};

type Source = PDFResource | PodcastResource | ArticleResource | VideoResource;

export default function ResourceDetails({ params }: Route.ComponentProps) {
  const resource = (db.resources as Resource[]).find(
    (r) => r.id === params.resourceId
  );

  if (!resource) {
    return `Resource ${params.resourceId} not found.`;
  }

  return (
    <div style={{ padding: "24px", height: "100%" }}>
      {`Resoucre ${resource.name} has tags ${JSON.stringify(
        resource.tags,
        null,
        4
      )}`}
      {resource.sources.map((source) => {
        if (source.type === ResourceType.PDF) {
          return <EmbeddedPDF source={source} />;
        } else if (source.type === ResourceType.Podcast) {
          return <EmbeddedPodcast source={source} />;
        } else if (source.type === ResourceType.Video) {
            return <EmbeddedVideo source={source} />;
          }
      })}
    </div>
  );
}

function EmbeddedPDF({ source }: { source: PDFResource }) {
  return (
    <object
      data={source.url}
      width="100%"
      height="100%"
      type="application/pdf"
    />
  );
}

function EmbeddedPodcast({ source }: { source: PodcastResource }) {
  if (source.provider === PodcastProvider.Spotify) {
    return <EmbeddedSpotifyPodcast url={source.url} />;
  } else if (source.provider === PodcastProvider.Apple) {
    return <EmbeddedApplePodcast url={source.url} />;
  } else if (source.provider === PodcastProvider.File) {
    return <EmbeddedFilePodcast url={source.url} />;
  }
}

function EmbeddedSpotifyPodcast({ url }: { url: PodcastResource["url"] }) {
  return (
    <iframe
      style={{ borderRadius: "12px", border: 0 }}
      src={url}
      width="100%"
      height="352"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  );
}

function EmbeddedApplePodcast({ url }: { url: PodcastResource["url"] }) {
  return (
    <iframe
      allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
      style={{
        width: "100%",
        height: "175px",
        overflow: "hidden",
        borderRadius: "10px",
        border: 0,
      }}
      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
      src={url}
    />
  );
}

function EmbeddedFilePodcast({ url }: { url: PodcastResource["url"] }) {
  return (
    <audio controls style={{ width: "100%" }}>
      <source src={url} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
}

function EmbeddedVideo({ source }: { source: VideoResource }) {
    if (source.provider === VideoProvider.File) {
      return <EmbeddedFileVideo url={source.url} />;
    } else if (source.provider === VideoProvider.Youtube) {
      return <EmbeddedYoutubeVideo url={source.url} />;
    } 
  }

function EmbeddedYoutubeVideo({ url }: { url: VideoResource["url"] }) {
  return (
    <iframe
      style={{ border: 0 }}
      width="100%"
      height="315"
      src={url}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  );
}

function EmbeddedFileVideo({ url }: { url: VideoResource["url"] }) {
    return (
      <video controls style={{ width: "100%" }}>
        <source src={url} type="audio/mpeg" />
        Your browser does not support the audio element.
      </video>
    );
  }