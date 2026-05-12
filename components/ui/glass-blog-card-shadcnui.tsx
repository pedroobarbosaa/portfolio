import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

interface GlassBlogCardProps {
  title?: string;
  excerpt?: string;
  image?: string;
  tags?: string[];
  category?: string;
  liveUrl?: string;
  isPrivate?: boolean;
  className?: string;
}

export function GlassBlogCard({
  title,
  excerpt,
  image,
  tags,
  category,
  liveUrl,
  isPrivate,
  className,
}: GlassBlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className={cn("w-full max-w-[400px]", className)}
    >
      <Card className="group relative h-full overflow-hidden rounded-2xl border-border/50 bg-card/30 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
        <div className="relative aspect-[16/9] overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />
          <div className="absolute bottom-3 left-3 flex gap-2 flex-wrap">
            {tags?.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-background/50 backdrop-blur-sm hover:bg-background/80"
              >
                {tag}
              </Badge>
            ))}
          </div>
          {liveUrl && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/20 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <motion.a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25"
              >
                <ExternalLink className="h-4 w-4" />
                View Live Site
              </motion.a>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-4 p-5">
          {category && (
            <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">{category}</span>
          )}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold leading-tight tracking-tight text-foreground transition-colors group-hover:text-primary">
              {title}
            </h3>
            <p className="line-clamp-3 text-sm text-muted-foreground">
              {excerpt}
            </p>
          </div>
          <div className="border-t border-border/50 pt-4 flex items-center gap-2 text-sm text-muted-foreground">
            {isPrivate && (
              <span className="flex items-center gap-1 text-xs">🔒 Source private</span>
            )}
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-primary hover:underline ml-auto">
                View Live Site ↗
              </a>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
